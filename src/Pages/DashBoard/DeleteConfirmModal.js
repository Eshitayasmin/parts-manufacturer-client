import React from 'react';


const DeleteConfirmModal = ({deletingOrder, handleDelete}) => {

    const {_id} = deletingOrder;
   
    
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">id:{_id}, Are you sure you want to delete?</h3>
                    <div class="modal-action">
                    <button onClick={() => handleDelete(_id)} class="btn btn-outline btn-error btn-xs text-white">Delete</button>

                        <label for="delete-confirm-modal" class="btn btn-xs btn-outline">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;