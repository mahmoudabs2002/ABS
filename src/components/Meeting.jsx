/* eslint-disable react/prop-types */
import { AlertCircle } from "lucide-react";
import { Calendar } from "primereact/calendar";
import Swal from "sweetalert2";
import { IoMdArrowForward } from "react-icons/io";

const AlertMessage = () => (
  <div className="text-white flex items-center translate-x-[300px] lg:translate-x-0 w-[400px] lg:w-full gap-4">
    <AlertCircle />
    <p>
      Confirmation of the meeting details will be sent through email. Please
      follow up. If a problem arises, contact us through our direct channels.
    </p>
  </div>
);

const LocationSelector = ({ formData, setFormData }) => {
  const locations = ["At ABS.AI Headquarters", "At your headquarters", "Online Meeting"];

  return (
    <div className="bg-white lg:w-fit w-[400px] p-4 translate-x-[300px] lg:translate-x-0">
      <h3 className="font-bold text-black text-2xl">Location</h3>
      {locations.map((location) => (
        <div
          key={location}
          onClick={() => setFormData({ ...formData, location })}
          className={`cursor-pointer duration-200 border mb-2 px-10 text-center py-2 ${
            formData.location === location ? "bg-primary text-white" : ""
          }`}
        >
          {location}
        </div>
      ))}
    </div>
  );
};

const TimeSlot = ({ value, selectedValue, onClick }) => (
  <div
    onClick={() => onClick(value)}
    className={`cursor-pointer duration-200 border mb-2 px-10 text-center py-2 ${
      selectedValue === value ? "bg-primary text-white" : ""
    }`}
  >
    {value}
  </div>
);

const WorkHoursSelector = ({ formData, setFormData }) => {
  const workHours = ["1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00"];
  const postWorkHours = ["7:30", "8:00", "8:30", "9:00", "9:30", "10:00"];

  return (
    <div className="bg-white lg:w-fit w-[400px] translate-x-[300px] lg:translate-x-0 p-4">
      <h3 className="font-bold text-black text-2xl">Time Slots</h3>
      <div className="flex gap-2 mt-2">
        {["30 min", "1 Hour", "1+ Hour"].map((slot) => (
          <TimeSlot
            key={slot}
            value={slot}
            selectedValue={formData.time_slot}
            onClick={(value) => setFormData({ ...formData, time_slot: value })}
          />
        ))}
      </div>
      <h3 className="font-bold text-black my-3">Work Hours Time Slots (PM)</h3>
      <div className="flex flex-wrap gap-2">
        {workHours.map((time) => (
          <TimeSlot
            key={time}
            value={time}
            selectedValue={formData.work_hours_time_slot}
            onClick={(value) => setFormData({ ...formData, work_hours_time_slot: value })}
          />
        ))}
      </div>
      <p className="text-black font-bold">Post-work Hours Time Slots (PM)</p>
      <div className="flex flex-wrap gap-2">
        {postWorkHours.map((time) => (
          <TimeSlot
            key={time}
            value={time}
            selectedValue={formData.work_hours_time_slot}
            onClick={(value) => setFormData({ ...formData, work_hours_time_slot: value })}
          />
        ))}
      </div>
    </div>
  );
};

const DateTimeSelector = ({ formData, setFormData, date, setDate }) => (
  <div className="flex flex-col lg:flex-row gap-8 w-[1000px]">
    <Calendar
      className="w-[400px] translate-x-[300px] lg:translate-x-0"
      value={date}
      minDate={new Date()}
      onChange={(e) => {
        setFormData({ ...formData, date: e.value.toLocaleDateString("en-US") });
        setDate(e.value);
      }}
      inline
      showWeek
    />
    <WorkHoursSelector formData={formData} setFormData={setFormData} />
  </div>
);

const ActionButtons = ({ formData, sendEmail, setSection }) => (
  <div className="flex justify-center items-center lg:justify-end lg:items-end">
    <div
      onClick={() => setSection(2)}
      className="mr-8 flex gap-2 items-center bg-[#B8BBBD] rounded-3xl text-white py-2 px-10 w-fit mt-4 cursor-pointer hover:shadow-xl duration-300"
    >
      Back
    </div>
    <button
      onClick={() =>
        formData.location === "" || formData.time_slot === "" || formData.date === ""
          ? Swal.fire({ title: "All fields are required", icon: "error", draggable: true })
          : sendEmail()
      }
      className="flex gap-2 items-center bg-primary rounded-3xl text-white py-2 px-10 w-fit mt-4 cursor-pointer hover:shadow-xl duration-300"
    >
      Send request
      <IoMdArrowForward />
    </button>
  </div>
);

const MeetingDetails = ({ formData, setFormData, date, setDate, sendEmail, setSection }) => {
  return (
    <div className="lg:w-[1200px] w-full mt-4">
      <h3 className="text-white ml-80 lg:ml-0 my-4 text-2xl">Meeting Details</h3>
      <AlertMessage />

      <h3 className="text-white ml-80 lg:ml-0 my-4 text-2xl">Location</h3>
      <LocationSelector formData={formData} setFormData={setFormData} />

      <h3 className="text-white ml-80 lg:ml-0 my-4 text-2xl">Date and Time</h3>
      <DateTimeSelector formData={formData} setFormData={setFormData} date={date} setDate={setDate} />

      <ActionButtons formData={formData} sendEmail={sendEmail} setSection={setSection} />
    </div>
  );
};

export default MeetingDetails;