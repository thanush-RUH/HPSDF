
'use client';
import { FaCheck, FaHourglass} from "react-icons/fa";


import { Table } from 'flowbite-react';

function LeaveTracker() {

    const leaveStatus = [
        {
            id: 1,
            name: "Mr.Sachintha Dilshan",
            type: "Sick leave",
            acting: true,
            supervisor: true,
            hod: false
        },
        {
            id: 2,
            name: "Ms.Chani Ekanayake",
            type: "Casual Leave",
            acting: true,
            supervisor: false,
            hod: false
        },
        {
            id: 3,
            name: "Ms.Praveen Sathsara",
            type: "Casual Leave",
            acting: false,
            supervisor: false,
            hod: false
        }
    ];
  return (
    <div className="overflow-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Employee Name</Table.HeadCell>
          <Table.HeadCell>Leave Type</Table.HeadCell>
          <Table.HeadCell>Officer Acting</Table.HeadCell>
          <Table.HeadCell>Supervising Officer</Table.HeadCell>
          <Table.HeadCell>Head of The Department</Table.HeadCell>

          <Table.HeadCell>
            <span className="sr-only">View</span>
          </Table.HeadCell>
        </Table.Head>


        <Table.Body className="divide-y">

        {leaveStatus.map((status) => (
        <Table.Row key={status.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {status.name}
          </Table.Cell>
          <Table.Cell>{status.type}</Table.Cell>
          <Table.Cell >{status.acting ? <span className="text-green-500 uppercase flex gap-5 items-center" > <FaCheck/>  Approved</span> : <span className="text-orange-400 uppercase flex gap-5 items-center"> <FaHourglass/>  Pending</span>} </Table.Cell>
          <Table.Cell >{status.supervisor ? <span className="text-green-500 uppercase flex gap-5 items-center" > <FaCheck/>  Approved</span> : <span className="text-orange-400 uppercase flex gap-5 items-center"> <FaHourglass/>  Pending</span>} </Table.Cell>
          <Table.Cell >{status.hod ? <span className="text-green-500 uppercase flex gap-5 items-center" > <FaCheck/>  Approved</span> : <span className="text-orange-400 uppercase flex gap-5 items-center"> <FaHourglass/>  Pending</span>} </Table.Cell>
          <Table.Cell>
              <a href="https://noPage.com" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 uppercase">
                view
              </a>
            </Table.Cell>
        </Table.Row>
      ))}

        </Table.Body>
      </Table>
    </div>
  );
}

export default LeaveTracker;