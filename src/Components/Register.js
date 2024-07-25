import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

function UserRoleDialog({ open, onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCancel = () => {
    setName("");
    setEmail("");
    onClose();
  };

  const handleSubmit = () => {
    // console.log("DATA ", { name, email });

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: name,
      email: email,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://192.168.103.14:3000/new-user", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <Dialog open={open} onClose={handleCancel}>
      <DialogTitle>Kullanıcı Bilgileri</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="İsim"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Email"
          type="text"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="warning">
          İptal
        </Button>
        <Button onClick={handleSubmit} color="success">
          Gönder
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function Register() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSubmit = (data) => {
    console.log("Submitted data:", data); // şuan logluyo socket io ile post yollanacak
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpenDialog}>
        Kullanıcı Kayıt
      </Button>
      <UserRoleDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        onSubmit={handleSubmit}
      />
    </>
  );
}