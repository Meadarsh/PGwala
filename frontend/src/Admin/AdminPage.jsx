import React, { useState } from "react";
import AddProperty from "./add";
import Delete from "./delete";
import Message from "./Message"; // Import the Message component
import PasswordPrompt from "./Password";

const AdminPage = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [currentPage, setCurrentPage] = useState('add');

    const handleAuthenticate = (isAuthenticated) => {
        setAuthenticated(isAuthenticated);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (!authenticated) {
        return <PasswordPrompt onAuthenticate={handleAuthenticate} />;
    }

    return (
        <div className="h-full w-full ">
            <div className="text-4xl flex justify-center lg:mt-24 mt-16">
                <p>Welcome Admin</p>
            </div>
            <div className="flex w-full mt-4 justify-center gap-2 ">
                <div onClick={() => handlePageChange('add')} className={`text-white w-24 font-semibold cursor-pointer rounded-full flex justify-center py-2 ${currentPage === 'add' ? 'bg-red-500' : 'bg-red-800'} lg:hover:bg-red-500 `}>Add</div>
                <div onClick={() => handlePageChange('delete')} className={`text-white w-24 font-semibold cursor-pointer rounded-full flex justify-center py-2 ${currentPage === 'delete' ? 'bg-red-500' : 'bg-red-800'} lg:hover:bg-red-500`}>Delete</div>
                <div onClick={() => handlePageChange('message')} className={`text-white w-24 font-semibold cursor-pointer rounded-full flex justify-center py-2 ${currentPage === 'message' ? 'bg-red-500' : 'bg-red-800'} lg:hover:bg-red-500`}>Message</div>
            </div>
            {currentPage === 'add' && <AddProperty />}
            {currentPage === 'delete' && <Delete />}
            {currentPage === 'message' && <Message />}
        </div>
    );
};

export default AdminPage;
