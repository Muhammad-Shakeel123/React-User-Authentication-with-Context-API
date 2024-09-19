import React, { useContext } from 'react';
import UserContext from '../context/userContext';

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center bg-white p-8 rounded-lg shadow-md">
          <p className="text-xl text-gray-700 font-semibold">Please login</p>
        </div>
      </div>
    );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Welcome
        </h2>
        <p className="text-xl text-center text-gray-600 mb-6">
          Hello, {user.username}!
        </p>

        <div className="flex justify-center">
          <img
            src={`https://ui-avatars.com/api/?name=${user.username}&background=0D8ABC&color=fff&size=100`}
            alt="User Avatar"
            className="rounded-full shadow-lg w-24 h-24"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
