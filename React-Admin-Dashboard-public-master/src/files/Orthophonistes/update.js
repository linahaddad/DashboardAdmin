import { Form, Input, Button, message } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateOrthoForm() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Orthophoniste id:", id);
  }, [id]);

  const onFinish = (values) => {
    setLoading(true);
    console.log("Form values:", values);
    axios.put(`http://localhost:3000/orthophonistes/${id}`, values)
      .then(response => {
        console.log("Update orthophoniste response:", response.data); 
        message.success("orthophoniste updated successfully");
        navigate(`/UpdateOrthoForum/${id}`); // Correction du chemin de navigation
      })
      .catch(error => {
        console.error("Error updating orthophoniste:", error);
        message.error("Failed to update orthophoniste");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div style={{ padding: "20px", marginLeft: "400px" }}>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        style={{ width: "300px", margin: "0 auto" }}
      >
        <Form.Item
          label="Nom Complet"
          name="username"
          rules={[{ required: true, message: 'Veuillez saisir le nom complet' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Veuillez saisir une adresse email valide' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Numéro de Téléphone"
          name="numTelephone"
          rules={[{ required: true, message: 'Veuillez saisir le numéro de téléphone' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Région"
          name="region"
          rules={[{ required: true, message: 'Veuillez saisir la région' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Date de Naissance"
          name="dateNaissance"
          rules={[{ required: true, message: 'Veuillez saisir la date de naissance' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Diplome"
          name="diplome"
          rules={[{ required: true, message: 'Veuillez sélectionner diplome' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Années d'experience"
          name="anneeExperience"
          rules={[{ required: true, message: "Veuillez sélectionner Années d'experience" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Enregistrer
          </Button>
        </Form.Item>
      </Form>
    </div>  
  );
}

export default UpdateOrthoForm;
