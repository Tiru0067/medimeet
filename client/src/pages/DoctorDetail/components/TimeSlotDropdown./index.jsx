import { useState, useRef, useEffect } from "react";
import "./styles.css";
import { format } from "date-fns";

const TimeSlotDropdown = ({ slots, selectedSlot, onSelect }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div onClick={() => setOpen((prev) => !prev)} className="dropdown-toggle">
        {selectedSlot
          ? format(new Date(selectedSlot), "MMM d, hh:mm a")
          : "Select Time"}
      </div>

      {open && (
        <div className="dropdown-menu">
          {slots.length === 0 ? (
            <div className="dropdown-empty">No available times</div>
          ) : (
            slots.map((slot) => (
              <div
                key={slot}
                onClick={() => onSelect(slot)}
                className={`dropdown-item ${
                  selectedSlot === slot ? "dropdown-item-selected" : ""
                }`}
              >
                {format(new Date(slot), "MMM d, hh:mm a")}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default TimeSlotDropdown;
