"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "@/utils/uploadthing";
import { useSelector } from "react-redux";
import { parseCookies } from "nookies";
import { Box, FormControl, Select } from "@mui/material";
import { ToastContainer } from "react-toastify";

const createCampaign = () => {
  const { userId }: { userId: string | null } = useSelector(
    (state: any) => state.auth
  );
  const [data, setData] = useState({
    yourname: "",
    useremail: "",
    title: "",
    category: "",
    story: "",
    goal: "",
    enddate: "",
    image: "",
  });
  const router = useRouter();

  const currentDate = new Date().toISOString().split("T")[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date: any) => {
    const formateDate = date.format("DD-MM-YYYY");
    setData((prevData) => ({
      ...prevData,
      enddate: formateDate,
    }));
  };

  const handleFileChange = (imageUrl: string) => {
    setData((prevData) => ({
      ...prevData,
      image: imageUrl,
    }));
  };

  const handleCategory = (e: any) => {
    const category = e.target.value as string;
    setData((prevData) => ({
      ...prevData,
      category: category,
    }));
  };

  const [token, setToken] = useState<string>("");
  useEffect(() => {
    const getTokenFromCookie = () => {
      const cookies = parseCookies();
      setToken(cookies["token"]);
    };

    getTokenFromCookie();
  }, []);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3001/campaign/new/${userId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const Data = await res.json();
      if (res.ok) {
        alert(Data.message);
        await router.push("/main");
      } else {
        alert(Data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col  justify-center items-center h-screen bg-slate-300">
        <div className="flex flex-col gap-6 justify-center items-center p-6 rounded-lg shadow-xl backdrop-blur-xm bg-white/70">
          <div className="bg-zinc-400 flex flex-col justify-center p-1/2 rounded-lg ">
            <h4 className="justify-center m-2 p-2 text-2xl font-semibold">
              Create A Campaign!
            </h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className=" relative flex flex-row gap-5 items-center justify-center mt-4 mb-10">
              <div className="relative h-11 w-full min-w-[200px]">
                <TextField
                  required
                  value={data.yourname}
                  onChange={handleChange}
                  name="yourname"
                  size="small"
                  fullWidth
                  id="outlined-basic"
                  label="Enter Your Name"
                  variant="filled"
                  color="info"
                />
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <TextField
                  required
                  value={data.title}
                  onChange={handleChange}
                  name="title"
                  size="small"
                  fullWidth
                  id="outlined-basic"
                  label="Enter Campaign Title "
                  variant="filled"
                  color="info"
                />
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={data.category}
                      label="category"
                      onChange={handleCategory}
                    >
                      <MenuItem value="Education">Education</MenuItem>
                      <MenuItem value="Medical">Medical</MenuItem>
                      <MenuItem value="Technology">Technology</MenuItem>
                      <MenuItem value="Animals">Animals</MenuItem>
                      <MenuItem value="Emergency">Emergency</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
            <div className="relative w-full min-w-[200px] font-black mt-4 mb-6">
              <TextField
                required
                value={data.story}
                onChange={handleChange}
                name="story"
                multiline
                size="small"
                fullWidth
                id="outlined-basic"
                label="Enter Campaign Story"
                variant="filled"
                color="info"
              />
            </div>
            <div className="relative flex flex-row gap-5 items-center justify-center mt-4 mb-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <TextField
                  required
                  value={data.goal}
                  onChange={handleChange}
                  name="goal"
                  size="small"
                  fullWidth
                  id="outlined-basic"
                  label="Enter Goal Amount"
                  variant="filled"
                  color="info"
                />
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <TextField
                  required
                  value={data.useremail}
                  onChange={handleChange}
                  name="useremail"
                  size="small"
                  fullWidth
                  id="outlined-basic"
                  label="Enter User Email"
                  variant="filled"
                  color="info"
                />
              </div>
              <div className="relative  w-full min-w-[200px]">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      name="enddate" // Set the name attribute to match the field name
                      value={dayjs(data.enddate)}
                      onChange={handleDateChange}
                      defaultValue={Date.now()}
                      label="Select End Date"
                      minDate={dayjs(currentDate)}
                      format="DD-MM-YYYY"
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
            <div className="relative h-11 w-full min-w-[200px] justify-items mt-2 mb-4">
              <div className="relative w-full min-w-[200px]">
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res: { url: string }[]) => {
                    if (res && res.length > 0) {
                      handleFileChange(res[0].url);
                    }
                    alert("Upload Completed");
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              </div>
            </div>
            <button
              className="w-full mt-2 bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-blue-400 rounded-2xl"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default createCampaign;
