import React, { useRef, useContext, useEffect, useState } from "react";
import { OptionsContext, GlobalOptionsContext } from "@options";

export const getProfiles = async (setLoading) => {
  const res = await fetch("http://localhost:8000/api/v1/profile/", {
    method: 'GET',
    headers: {}
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error))
    .finally(() => setLoading(false)); 

  return res
}