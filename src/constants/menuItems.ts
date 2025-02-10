import { PiStudent, PiExam } from "react-icons/pi";
import { IoNewspaperOutline, IoSettingsOutline, IoHomeOutline, IoCalendarNumberOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LiaLayerGroupSolid, LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdOutlineEvent  } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { FaRegClipboard } from "react-icons/fa";

export const menuItems = [
    {
        icon: IoHomeOutline,
        label: "Home",
        href: "/"
    },
    {
        icon: LiaChalkboardTeacherSolid,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: PiStudent,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: IoNewspaperOutline,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: HiOutlineUserGroup,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: LiaLayerGroupSolid,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: BiTask,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: FaRegClipboard,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: PiExam,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: IoCalendarNumberOutline,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: MdOutlineEvent,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student"],
      },
      {
        icon: LuMessageCircleMore,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student"],
      },
];

export const otherMenuItems = [
  {
    icon: CgProfile,
    label: "Profile",
    href: "/profile",
    visible: ["admin", "teacher", "student"],
  },
  {
    icon: IoSettingsOutline,
    label: "Settings",
    href: "/settings",
    visible: ["admin", "teacher", "student"],
  },
  {
    icon: FiLogOut,
    label: "Logout",
    href: "/logout",
    visible: ["admin", "teacher", "student"],
  }
];