import React from 'react';


const DeleteConfirmModal = ({deletingOrder, handleDelete}) => {

    const {_id} = deletingOrder;
   
    
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">id:{_id}, Are you sure you want to delete?</h3>
                    <div className="modal-action">
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error btn-xs text-white">Delete</button>

                        <label for="delete-confirm-modal" className="btn btn-xs btn-outline">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;