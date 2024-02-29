import React, { useState, useEffect } from 'react';
import { AppBar } from '../components/AppBar';
import { Users } from '../components/Users';
import User from '../components/Users';
import { Balance } from '../components/Balance';
import axios from 'axios'; // Import axios for making HTTP requests

export function Dashboard() {
    const [balance, setBalance] = useState("Loading..."); // Initialize balance with "Loading..."

    useEffect(() => {
        // Make API call to fetch user's balance
        fetchUserBalance();
    }, []);

    const fetchUserBalance = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/v1/account/balance', {
                headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                      },
            });
            const data = response.data;
            setBalance(data.balance.toFixed(2)); // Update balance with fetched value
        } catch (error) {
            console.error('Error fetching user balance:', error);
            setBalance("Error"); // Set balance to indicate error
        }
    };

    return (
        <div>
            <AppBar />
            <div>
                <Balance value={balance} /> {/* Pass balance directly, no need for additional checking */}
                <Users />
                <User />
            </div>
        </div>
    );
}
