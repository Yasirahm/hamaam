import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { motion } from "framer-motion";
import { FaTrash, FaPlus, FaShareAlt } from "react-icons/fa";

const adminEmails = ["ratherseenu16@gmail.com", "admin@gmail.com"];

const AdminDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sales, setSales] = useState(0);
  const [logins, setLogins] = useState(0);
  const [orders, setOrders] = useState(0);
  const [bills, setBills] = useState([]);
  const [totalGained, setTotalGained] = useState(0);
  const [totalPaid, setTotalPaid] = useState(0);
  const [totalUnpaid, setTotalUnpaid] = useState(0);

  const [newBill, setNewBill] = useState({
    customerName: "",
    hamaamType: "",
    address: "",
    contact: "",
    size: "",
    totalAmount: "",
    paidAmount: "",
    pendingAmount: "",
    date: new Date().toLocaleDateString(),
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && adminEmails.includes(user.email)) {
        setIsAdmin(true);
        fetchData();
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const fetchData = async () => {
    setSales((await getDocs(collection(db, "sales"))).size);
    setLogins((await getDocs(collection(db, "logins"))).size);
    setOrders((await getDocs(collection(db, "orders"))).size);
    const billDocs = await getDocs(collection(db, "bills"));
    const billsData = billDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setBills(billsData);
    setTotalGained(billsData.reduce((sum, bill) => sum + Number(bill.totalAmount), 0));
    setTotalPaid(billsData.reduce((sum, bill) => sum + Number(bill.paidAmount), 0));
    setTotalUnpaid(billsData.reduce((sum, bill) => sum + Number(bill.pendingAmount), 0));
  };

  const addBill = async () => {
    const updatedBill = {
      ...newBill,
      pendingAmount: newBill.totalAmount - newBill.paidAmount,
    };
    await addDoc(collection(db, "bills"), updatedBill);
    setNewBill({
      customerName: "",
      hamaamType: "",
      address: "",
      contact: "",
      size: "",
      totalAmount: "",
      paidAmount: "",
      pendingAmount: "",
      date: new Date().toLocaleDateString(),
    });
    fetchData();
  };

  const deleteBill = async (id) => {
    await deleteDoc(doc(db, "bills", id));
    fetchData();
  };

  const shareBill = (bill) => {
    const billDetails = `Bill Details:\nCustomer: ${bill.customerName}\nType: ${bill.hamaamType}\nAddress: ${bill.address}\nContact: ${bill.contact}\nSize: ${bill.size}\nTotal: ₹${bill.totalAmount}\nPaid: ₹${bill.paidAmount}\nPending: ₹${bill.pendingAmount}\nDate: ${bill.date}`;
    navigator.share({ text: billDetails }).catch(() => alert("Sharing not supported"));
  };

  if (loading) return <p className="text-center">Checking access...</p>;
  if (!isAdmin) return <p className="text-center text-red-500"></p>;

  return (
    <motion.div className="p-6 bg-gray-100 min-h-screen" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold text-center text-gray-800">Ahhamnaam Constructions</h2>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 my-6">
        <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
          <h3 className="text-xl font-semibold">Total Customers</h3>
          <p className="text-2xl">{bills.length}</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg text-center">
          <h3 className="text-xl font-semibold">Total Gained</h3>
          <p className="text-2xl">₹{totalGained}</p>
        </div>
        <div className="bg-purple-500 text-white p-4 rounded-lg text-center">
          <h3 className="text-xl font-semibold">Total Paid</h3>
          <p className="text-2xl">₹{totalPaid}</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg text-center">
          <h3 className="text-xl font-semibold">Total Unpaid</h3>
          <p className="text-2xl">₹{totalUnpaid}</p>
        </div>
      </div>

      {/* Billing System */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Hamaam Billing System</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.keys(newBill).map((key) => (
            key !== "pendingAmount" && key !== "date" && (
              <input key={key} type={key.includes("Amount") ? "number" : "text"} placeholder={key} value={newBill[key]} onChange={(e) => setNewBill({...newBill, [key]: e.target.value})} className="p-2 border rounded" />
            )
          ))}
          <button onClick={addBill} className="bg-blue-600 text-white p-2 rounded col-span-3"><FaPlus className="inline mr-2" />Add Bill</button>
        </div>

        {/* Display Bills */}
        <ul className="mt-6 space-y-4">
  {bills.map((bill) => (
    <li
      key={bill.id}
      className="bg-white shadow-lg p-4 rounded-xl border-l-4 border-blue-500 flex flex-col sm:flex-row justify-between items-center"
    >
      <div className="text-gray-800">
        <p className="font-semibold text-lg">
          <span className="text-blue-600">👤 {bill.customerName}</span>
        </p>
        <p className="text-sm text-gray-600">
          🏗 <span className="font-medium">Hamaam Type:</span> {bill.hamaamType}
        </p>
        <p className="text-sm text-gray-600">
          📞 <span className="font-medium">Contact:</span> {bill.contact}
        </p>
        <p className="text-sm text-gray-600">
          💰 <span className="font-medium">Total:</span> ₹{bill.totalAmount} 
        </p>
        <p className={`text-sm font-semibold ${bill.pendingAmount > 0 ? "text-red-500" : "text-green-500"}`}>
          ⏳ Pending: ₹{bill.pendingAmount}
        </p>
      </div>

      <div className="flex gap-3 mt-4 sm:mt-0">
        <button
          onClick={() => shareBill(bill)}
          className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition"
          title="Share Bill"
        >
          <FaShareAlt className="w-5 h-5" />
        </button>

        <button
          onClick={() => deleteBill(bill.id)}
          className="bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600 transition"
          title="Delete Bill"
        >
          <FaTrash className="w-5 h-5" />
        </button>
      </div>
    </li>
  ))}
</ul>

      </div>
    </motion.div>
  );
};

export default AdminDashboard;
