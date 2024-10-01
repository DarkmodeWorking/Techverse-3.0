'use client';
import { useState, useEffect } from 'react';
import { Participant as ParticipantType } from '@/models/types';

export default function AdminDashboard() {
  const [participants, setParticipants] = useState<ParticipantType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredParticipants, setFilteredParticipants] = useState<ParticipantType[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State for selected image
  const [isZooming, setIsZooming] = useState(false); // State to track zoom animation

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
    const filteredData = participants.filter((participant) =>
      participant.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.phone.toString().includes(searchTerm) || // Convert phone number to string
      participant.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredParticipants(filteredData);
  }, [searchTerm, participants]);

  const openImageModal = (image: string) => {
    setSelectedImage(image); // Set the selected image when clicked
    setTimeout(() => setIsZooming(true), 10); // Delay the zoom effect for smooth animation
  };

  const closeModal = () => {
    setIsZooming(false); // Remove zoom effect before closing
    setTimeout(() => setSelectedImage(null), 300); // Delay closing to allow zoom-out animation
  };

  return (
    <div className="p-6 mt-16">
      <h4 className="text-2xl font-semibold mb-4">Admin Dashboard</h4>
      <p className="mb-4">Welcome to the admin panel!</p>

      <input
        type="text"
        placeholder="Search by Name, Event, Phone, or Email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-zinc-300 rounded-xl w-full bg-zinc-800 text-white"
      />

      <table className="min-w-full bg-zinc-800 text-white rounded-2xl">
        <thead>
          <tr>
            <th className="py-2">Sl. No</th> {/* Added column for Serial Number */}
            <th className="py-2">Full Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Phone</th>
            <th className="py-2">Event</th>
            <th className="py-2">Team Members</th>
            <th className="py-2">Screenshot</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {filteredParticipants.map((participant, index) => (
            <tr key={participant._id}>
              <td className="py-2">{index + 1}</td> {/* Display serial number */}
              <td className="py-2">{participant.fullName}</td>
              <td className="py-2">{participant.email}</td>
              <td className="py-2">{participant.phone}</td>
              <td className="py-2">{participant.event}</td>
              <td className="py-2">{participant.teamMembers.join(', ')}</td>
              <td className="py-2 flex justify-center">
                <img
                  src={participant.screenShot}
                  alt="Screenshot"
                  className="w-20 h-20 object-cover cursor-pointer rounded-xl"
                  onClick={() => openImageModal(participant.screenShot)} // Open modal on click
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={closeModal} // Close modal when clicking outside the image
        >
          <img
            src={selectedImage}
            alt="Zoomed Screenshot"
            className={`max-w-4xl max-h-screen rounded-3xl transition-transform duration-300 ${
              isZooming ? 'scale-100' : 'scale-75'
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking the image
          />
        </div>
      )}
    </div>
  );
}
