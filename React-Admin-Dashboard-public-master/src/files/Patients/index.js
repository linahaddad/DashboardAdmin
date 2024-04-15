import React, { useEffect, useState } from "react";
import { Avatar, Space, Table, Typography, Button, Spin, Modal, Input } from "antd";
import axios from "axios";
import { PlusCircleOutlined, ExclamationCircleOutlined} from "@ant-design/icons"; // Import de l'icône de recherche
import { useNavigate } from "react-router-dom";

const { confirm } = Modal;
const { Search } = Input;

function Patient() {
  const [loading, setLoading] = useState(false);
  const [patient, setPatient] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000/patient/patients")
      .then(response => {
        console.log("patient response:", response.data);
        setPatient(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching Patients:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = value => {
    const filteredPatients = patient.filter(med => med.name.toLowerCase().includes(value.toLowerCase()));
    setPatient(filteredPatients);
    setSearchValue(value);
  };

  const handleUppClick = (id) => {
    console.log("patientId:", id);
    navigate(`/patients/${id}`);
  };

  const handleDeleteClick = (id) => {
    confirm({
      title: "Are you sure you want to delete this patient?",
      icon: <ExclamationCircleOutlined />,
      content: "This action cannot be undone.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        axios.delete(`http://localhost:3000/patient/patients/${id}`)
          .then(response => {
            console.log("Delete patient response:", response.data);
            setPatient(patient.filter(cat => cat._id !== id));
          })
          .catch(error => {
            console.error("Error deleting patient:", error);
          });
      },
    });
  };

  const columns = [
    {
      title: "Photo",
      dataIndex: "photo",
      render: (photo) => <Avatar src={photo} />,
    },
    {
      title: "Nom Complet",
      dataIndex: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Numéro de Téléphone",
      dataIndex: "numTelephone",
    },
    {
      title: "Région",
      dataIndex: "region",
    },
    { 
      title:"Date de naissance",
      dataIndex:"dateNaissance"
    },
    {
      title: "Sexe",
      dataIndex: "sexe",
    },
    {
      title: "Actions",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleUppClick(record._id)}>Update</Button>
          <Button type="danger" onClick={() => handleDeleteClick(record._id)} style={{ backgroundColor: "red", borderColor: "red", color: "white" }}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Typography.Title level={4}>
        <Space>
          <span>Patients</span>
        </Space>
      </Typography.Title>
      <Space style={{ marginBottom: 16 }}>
      <Search
        placeholder="Search Patient"
        onSearch={handleSearch}
        value={searchValue}
        enterButton
        style={{ marginBottom: 16 }}
        
      />
      </Space>
      <Spin spinning={loading}>
        <Table dataSource={patient} columns={columns} />
      </Spin>
    </div>
  );
}

export default Patient;
