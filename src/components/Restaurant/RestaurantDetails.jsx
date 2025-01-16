import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";
import {
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import MenuCard from "./MenuCard";

const categories = ["pizza", "burger", "biriyani", "steak", "pasta"];

const foodTypes = [
  { label: "all", value: "all" },
  { label: "Vegetarian", value: "veg" },
  { label: "non-vegetarian", value: "non-veg" },
  { label: "seasonal", value: "seasonal" },
];

const menu = [1, 1, 1, 1, 1, 1];

const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");
  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-700 py-2 mt-10">
          Home/Bangladesh/fast food/3
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {/* First row - full width image */}
          <div className="w-full">
            <img
              className="w-full h-[40vh] object-cover"
              src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg"
              alt=""
            />
          </div>

          {/* Second row - three images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="pt-3 pb-5">
          <h1 className=" text-4xl font-semibold">Fast Food</h1>
          <p className="text-gray-700 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            perspiciatis, eaque nesciunt ut omnis, tenetur voluptatibus
            exercitationem accusantium aperiam quidem eos, repellendus impedit.
            Sint omnis odio voluptatibus. Quidem, magnam quia?
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-700 flex items-center gap-3">
              <LocationOnIcon />
              <span> Dhaka, Bangladesh</span>
            </p>
            <p className="text-gray-700 flex items-center gap-3">
              <ScheduleIcon />
              <span>Mon-Sun 9:00 AM - 11:00 PM</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex  relative pb-10">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    ></FormControlLabel>
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_category"
                  value={foodType}
                >
                  {categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    ></FormControlLabel>
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.map((item) => (
            <MenuCard />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
