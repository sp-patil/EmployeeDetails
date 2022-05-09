import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import AddEditForm from "./AddEditForm";

const List = () => {
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    const url =
      "https://bodhavajiapi.disctesting.in/api/masters/allMasters/employeeMasterList";
    await axios.get(url).then((res) => {
      setData(res.data.data);
    });
  };

  const closeModal = (isLoadData = false) => {
    setEditId(undefined);
    setShowModal(false);
    if (isLoadData) loadData();
  };

  return (
    <div>
      <div className="text-center">
        <button onClick={() => setShowModal(true)} className="btn btn-primary rounded-pill">
          Add Employee
        </button>
      </div>
      <Modal
        show={showModal}
        onHide={() => {
          return;
        }}
      >
        <AddEditForm onClose={closeModal} editId={editId} />
      </Modal>

      <div className=" table_main p-3 my-3">
        <h4 className="emplist text-center bg-light p-2">Employee List</h4>
        <table className="table table-bordered">
          <thead className="text-center">
            <tr>
              <th scope="col" className="col-md-6">
                Name
              </th>
              <th scope="col" className="col-md-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data?.map((item) => (
              <tr key={item.id}>
                <td>{item.fullName}</td>
                <td>
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setEditId(item.id);
                    }}
                    className="btn btn-sm btn-light"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
