import styles from './AdminStats.module.css';
import { PieChart } from '@mui/x-charts/PieChart';
import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from "../../context/User";

export default function AdminStats() {
    const [roleCounts, setRoleCounts] = useState([]);
    const { userToken } = useContext(UserContext);

    useEffect(() => {
        const fetchRoleCounts = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:3000/api/v1/admin/get-roles`,
                    {
                        headers: {
                            Authorization: `Bearer ${userToken}`,
                        },
                    }
                );
                setRoleCounts(response.data.roleCounts);
            } catch (error) {
                console.log(error.response.data);
            }
        };

        fetchRoleCounts();
    }, [userToken]);

    return (
        <div className={styles.adminStats}>
            <h1>Admin Stats</h1>
            <h3>👇Here is where all Admin Stats should be displayed👇</h3>

            <PieChart
                series={[
                    {
                        data: roleCounts.map(role => ({
                            id: role._id,
                            value: role.count,
                            label: role._id
                        })),
                    },
                ]}
                width={400}
                height={200}
            />
        </div>
    );
}
