import  { useState, useEffect } from 'react';
import ApiService from '../../services/ApiService';
import { User } from '../../mpdels/models';

function UsersManager() {
  const [users, setUsers] = useState<User[] | null>(null); // אפשר למשתנה להיות מערך או null
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await ApiService.getUsers();
        console.log('API Response:', response);
        if (Array.isArray(response.data)) { // בדיקה שהתגובה היא מערך
          setUsers(response.data);
        } else {
          setError('שגיאה: ה-API לא מחזיר נתונים תקינים.');
        }
      } catch (error: any) {
        console.error('Failed to fetch users', error);
        setError(error.message || 'שגיאה בטעינת משתמשים.');
      }
    }
    fetchUsers();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (users === null) { // בדיקה אם המשתמשים עדיין לא נטענו
    return <div>טוען משתמשים...</div>;
  }

  return (
    <div>
      <h2>ניהול משתמשים</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.FullName} - {user.email} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersManager;