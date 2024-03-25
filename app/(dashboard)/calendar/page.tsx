import Calendar from "@/components/Calender";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar Page | Classis",
  description: "This is Calendar page for Classis",
  // other metadata
};

const CalendarPage = () => {
  return (
    <>
      <Calendar />
    </>
  );
};

export default CalendarPage;
