'use client';
import { useEffect, useState } from 'react';
import { Participant as ParticipantType } from '@/models/types';

export default function AdminDashboard() {
  const [participants, setParticipants] = useState<ParticipantType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredParticipants, setFilteredParticipants] = useState<ParticipantType[]>([]);

  useEffect(() => {
    const fetchParticipants = async () => {
      const response = await fetch('/api/register'); // Adjust this endpoint if needed
      const data: ParticipantType[] = await response.json();
      setParticipants(data);
      setFilteredParticipants(data);
    };

    fetchParticipants();
  }, []);

  useEffect(() => {
    const filteredData = participants.filter(participant =>
      participant.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.phone.toString().includes(searchTerm) || // Convert phone number to string
      participant.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredParticipants(filteredData);
  }, [searchTerm, participants]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <p className="mb-4">Welcome to the admin panel!</p>

      <input
        type="text"
        placeholder="Search by Name, Event, Phone, or Email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-zinc-300 rounded w-full bg-zinc-800 text-white"
      />

      <table className="min-w-full bg-zinc-800 text-white rounded-lg">
        <thead>
          <tr>
            <th className="py-2">Full Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Phone</th>
            <th className="py-2">Event</th>
            <th className="py-2">Team Members</th>
            <th className="py-2">Screenshot</th>
          </tr>
        </thead>
        <tbody>
          {filteredParticipants.map((participant) => (
            <tr key={participant._id}>
              <td className="py-2">{participant.fullName}</td>
              <td className="py-2">{participant.email}</td>
              <td className="py-2">{participant.phone}</td>
              <td className="py-2">{participant.event}</td>
              <td className="py-2">{participant.teamMembers.join(', ')}</td>
              <td className="py-2">
                <img src={participant.screenShot} alt="Screenshot" className="w-20 h-20 object-cover" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
