import express from "express";

let userDatabase = [];

export function getUsers(req, res) {
    res.json(userDatabase);
  }

  export function addUser(req, res) {
    const {name, surname} = req.body;

   if (!name || !surname) {
        return res.status(400).json({ error: "Name and surname are required" });
      }

    const user = {name, surname} ;
    userDatabase.push(user);

    res.status(201).json({ message: "User added successfully", user });
  }


