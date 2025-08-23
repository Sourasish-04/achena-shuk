import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, CheckCircle, X, Phone, Users } from 'lucide-react';

const VerifyMember = () => {
  const [memberId, setMemberId] = useState('');
  const [member, setMember] = useState(null);
  const [error, setError] = useState('');

  // 60 unique members with complete information
  const memberDatabase = [
    { id: 'HF001', name: 'Sarah Johnson', position: 'Executive Director', phone: '+1 (555) 234-5678', bloodGroup: 'A+', photo: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF002', name: 'Michael Chen', position: 'Project Manager', phone: '+1 (555) 345-6789', bloodGroup: 'B+', photo: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF003', name: 'Emily Davis', position: 'Community Outreach Coordinator', phone: '+1 (555) 456-7890', bloodGroup: 'AB+', photo: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF004', name: 'David Wilson', position: 'Finance Director', phone: '+1 (555) 567-8901', bloodGroup: 'O+', photo: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF005', name: 'Lisa Anderson', position: 'Volunteer Coordinator', phone: '+1 (555) 678-9012', bloodGroup: 'A-', photo: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF006', name: 'James Rodriguez', position: 'Communications Manager', phone: '+1 (555) 789-0123', bloodGroup: 'B-', photo: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF007', name: 'Maria Garcia', position: 'Field Operations Manager', phone: '+1 (555) 890-1234', bloodGroup: 'AB-', photo: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF008', name: 'Robert Thompson', position: 'Program Specialist', phone: '+1 (555) 901-2345', bloodGroup: 'O-', photo: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF009', name: 'Jennifer Martinez', position: 'Development Officer', phone: '+1 (555) 012-3456', bloodGroup: 'A+', photo: 'https://images.pexels.com/photos/3763189/pexels-photo-3763189.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF010', name: 'Christopher Lee', position: 'Operations Manager', phone: '+1 (555) 123-4567', bloodGroup: 'B+', photo: 'https://images.pexels.com/photos/3777932/pexels-photo-3777932.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF011', name: 'Amanda Brown', position: 'Research Analyst', phone: '+1 (555) 234-5679', bloodGroup: 'AB+', photo: 'https://images.pexels.com/photos/3756680/pexels-photo-3756680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF012', name: 'Daniel Kim', position: 'Grant Writer', phone: '+1 (555) 345-6780', bloodGroup: 'O+', photo: 'https://images.pexels.com/photos/3785078/pexels-photo-3785078.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF013', name: 'Jessica Taylor', position: 'Social Media Manager', phone: '+1 (555) 456-7891', bloodGroup: 'A-', photo: 'https://images.pexels.com/photos/3763190/pexels-photo-3763190.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF014', name: 'Matthew White', position: 'Event Coordinator', phone: '+1 (555) 567-8902', bloodGroup: 'B-', photo: 'https://images.pexels.com/photos/3777933/pexels-photo-3777933.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF015', name: 'Ashley Miller', position: 'Training Specialist', phone: '+1 (555) 678-9013', bloodGroup: 'AB-', photo: 'https://images.pexels.com/photos/3756682/pexels-photo-3756682.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF016', name: 'Andrew Jackson', position: 'Quality Assurance Lead', phone: '+1 (555) 789-0124', bloodGroup: 'O-', photo: 'https://images.pexels.com/photos/3785080/pexels-photo-3785080.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF017', name: 'Stephanie Harris', position: 'Partnership Manager', phone: '+1 (555) 890-1235', bloodGroup: 'A+', photo: 'https://images.pexels.com/photos/3763191/pexels-photo-3763191.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF018', name: 'Joshua Clark', position: 'Data Analyst', phone: '+1 (555) 901-2346', bloodGroup: 'B+', photo: 'https://images.pexels.com/photos/3777934/pexels-photo-3777934.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF019', name: 'Michelle Lewis', position: 'Logistics Coordinator', phone: '+1 (555) 012-3457', bloodGroup: 'AB+', photo: 'https://images.pexels.com/photos/3756683/pexels-photo-3756683.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF020', name: 'Ryan Walker', position: 'Fundraising Specialist', phone: '+1 (555) 123-4568', bloodGroup: 'O+', photo: 'https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF021', name: 'Nicole Hall', position: 'Human Resources Manager', phone: '+1 (555) 234-5680', bloodGroup: 'A-', photo: 'https://images.pexels.com/photos/3763192/pexels-photo-3763192.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF022', name: 'Kevin Young', position: 'IT Support Specialist', phone: '+1 (555) 345-6781', bloodGroup: 'B-', photo: 'https://images.pexels.com/photos/3777935/pexels-photo-3777935.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF023', name: 'Rachel Allen', position: 'Marketing Director', phone: '+1 (555) 456-7892', bloodGroup: 'AB-', photo: 'https://images.pexels.com/photos/3756684/pexels-photo-3756684.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF024', name: 'Brandon King', position: 'Public Relations Officer', phone: '+1 (555) 567-8903', bloodGroup: 'O-', photo: 'https://images.pexels.com/photos/3785082/pexels-photo-3785082.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF025', name: 'Lauren Wright', position: 'Regional Coordinator', phone: '+1 (555) 678-9014', bloodGroup: 'A+', photo: 'https://images.pexels.com/photos/3763193/pexels-photo-3763193.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF026', name: 'Justin Lopez', position: 'Education Program Manager', phone: '+1 (555) 789-0125', bloodGroup: 'B+', photo: 'https://images.pexels.com/photos/3777936/pexels-photo-3777936.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF027', name: 'Samantha Hill', position: 'Healthcare Outreach Lead', phone: '+1 (555) 890-1236', bloodGroup: 'AB+', photo: 'https://images.pexels.com/photos/3756685/pexels-photo-3756685.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF028', name: 'Tyler Scott', position: 'Emergency Response Coordinator', phone: '+1 (555) 901-2347', bloodGroup: 'O+', photo: 'https://images.pexels.com/photos/3785083/pexels-photo-3785083.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF029', name: 'Brittany Green', position: 'Sustainability Officer', phone: '+1 (555) 012-3458', bloodGroup: 'A-', photo: 'https://images.pexels.com/photos/3763194/pexels-photo-3763194.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF030', name: 'Jonathan Adams', position: 'Monitoring & Evaluation Specialist', phone: '+1 (555) 123-4569', bloodGroup: 'B-', photo: 'https://images.pexels.com/photos/3777937/pexels-photo-3777937.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF031', name: 'Megan Baker', position: 'Community Health Worker', phone: '+1 (555) 234-5681', bloodGroup: 'AB-', photo: 'https://images.pexels.com/photos/3756686/pexels-photo-3756686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF032', name: 'Nathan Gonzalez', position: 'Administrative Assistant', phone: '+1 (555) 345-6782', bloodGroup: 'O-', photo: 'https://images.pexels.com/photos/3785084/pexels-photo-3785084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF033', name: 'Kayla Nelson', position: 'Financial Analyst', phone: '+1 (555) 456-7893', bloodGroup: 'A+', photo: 'https://images.pexels.com/photos/3763195/pexels-photo-3763195.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF034', name: 'Eric Carter', position: 'Legal Advisor', phone: '+1 (555) 567-8904', bloodGroup: 'B+', photo: 'https://images.pexels.com/photos/3777938/pexels-photo-3777938.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF035', name: 'Danielle Mitchell', position: 'Procurement Officer', phone: '+1 (555) 678-9015', bloodGroup: 'AB+', photo: 'https://images.pexels.com/photos/3756687/pexels-photo-3756687.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF036', name: 'Aaron Perez', position: 'Transportation Coordinator', phone: '+1 (555) 789-0126', bloodGroup: 'O+', photo: 'https://images.pexels.com/photos/3785085/pexels-photo-3785085.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF037', name: 'Courtney Roberts', position: 'Warehouse Manager', phone: '+1 (555) 890-1237', bloodGroup: 'A-', photo: 'https://images.pexels.com/photos/3763196/pexels-photo-3763196.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF038', name: 'Sean Turner', position: 'Security Officer', phone: '+1 (555) 901-2348', bloodGroup: 'B-', photo: 'https://images.pexels.com/photos/3777939/pexels-photo-3777939.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF039', name: 'Vanessa Phillips', position: 'Maintenance Supervisor', phone: '+1 (555) 012-3459', bloodGroup: 'AB-', photo: 'https://images.pexels.com/photos/3756688/pexels-photo-3756688.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF040', name: 'Marcus Campbell', position: 'Customer Service Representative', phone: '+1 (555) 123-4570', bloodGroup: 'O-', photo: 'https://images.pexels.com/photos/3785086/pexels-photo-3785086.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF041', name: 'Tiffany Parker', position: 'Database Administrator', phone: '+1 (555) 234-5682', bloodGroup: 'A+', photo: 'https://images.pexels.com/photos/3763197/pexels-photo-3763197.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF042', name: 'Gregory Evans', position: 'Web Developer', phone: '+1 (555) 345-6783', bloodGroup: 'B+', photo: 'https://images.pexels.com/photos/3777940/pexels-photo-3777940.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF043', name: 'Crystal Edwards', position: 'Graphic Designer', phone: '+1 (555) 456-7894', bloodGroup: 'AB+', photo: 'https://images.pexels.com/photos/3756689/pexels-photo-3756689.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF044', name: 'Patrick Collins', position: 'Video Production Specialist', phone: '+1 (555) 567-8905', bloodGroup: 'O+', photo: 'https://images.pexels.com/photos/3785087/pexels-photo-3785087.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF045', name: 'Monique Stewart', position: 'Translation Coordinator', phone: '+1 (555) 678-9016', bloodGroup: 'A-', photo: 'https://images.pexels.com/photos/3763198/pexels-photo-3763198.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF046', name: 'Jeremy Sanchez', position: 'Cultural Liaison', phone: '+1 (555) 789-0127', bloodGroup: 'B-', photo: 'https://images.pexels.com/photos/3777941/pexels-photo-3777941.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF047', name: 'Jasmine Morris', position: 'Youth Program Director', phone: '+1 (555) 890-1238', bloodGroup: 'AB-', photo: 'https://images.pexels.com/photos/3756690/pexels-photo-3756690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF048', name: 'Carl Rogers', position: 'Women Empowerment Lead', phone: '+1 (555) 901-2349', bloodGroup: 'O-', photo: 'https://images.pexels.com/photos/3785088/pexels-photo-3785088.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF049', name: 'Alexis Reed', position: 'Environmental Specialist', phone: '+1 (555) 012-3460', bloodGroup: 'A+', photo: 'https://images.pexels.com/photos/3763199/pexels-photo-3763199.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF050', name: 'Victor Cook', position: 'Agriculture Advisor', phone: '+1 (555) 123-4571', bloodGroup: 'B+', photo: 'https://images.pexels.com/photos/3777942/pexels-photo-3777942.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF051', name: 'Destiny Morgan', position: 'Water Systems Engineer', phone: '+1 (555) 234-5683', bloodGroup: 'AB+', photo: 'https://images.pexels.com/photos/3756691/pexels-photo-3756691.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF052', name: 'Antonio Bailey', position: 'Construction Supervisor', phone: '+1 (555) 345-6784', bloodGroup: 'O+', photo: 'https://images.pexels.com/photos/3785089/pexels-photo-3785089.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF053', name: 'Sierra Rivera', position: 'Medical Officer', phone: '+1 (555) 456-7895', bloodGroup: 'A-', photo: 'https://images.pexels.com/photos/3763200/pexels-photo-3763200.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF054', name: 'Malik Cooper', position: 'Nurse Practitioner', phone: '+1 (555) 567-8906', bloodGroup: 'B-', photo: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF055', name: 'Gabrielle Richardson', position: 'Pharmacist', phone: '+1 (555) 678-9017', bloodGroup: 'AB-', photo: 'https://images.pexels.com/photos/3756692/pexels-photo-3756692.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF056', name: 'Darius Cox', position: 'Laboratory Technician', phone: '+1 (555) 789-0128', bloodGroup: 'O-', photo: 'https://images.pexels.com/photos/3785090/pexels-photo-3785090.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF057', name: 'Kiara Ward', position: 'Counselor', phone: '+1 (555) 890-1239', bloodGroup: 'A+', photo: 'https://images.pexels.com/photos/3763201/pexels-photo-3763201.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF058', name: 'Terrell Torres', position: 'Social Worker', phone: '+1 (555) 901-2350', bloodGroup: 'B+', photo: 'https://images.pexels.com/photos/3777944/pexels-photo-3777944.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF059', name: 'Imani Peterson', position: 'Teacher', phone: '+1 (555) 012-3461', bloodGroup: 'AB+', photo: 'https://images.pexels.com/photos/3756693/pexels-photo-3756693.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
    { id: 'HF060', name: 'Jamal Gray', position: 'Librarian', phone: '+1 (555) 123-4572', bloodGroup: 'O+', photo: 'https://images.pexels.com/photos/3785091/pexels-photo-3785091.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' }
  ];

  const handleVerify = (e) => {
    e.preventDefault();
    setError('');
    setMember(null);

    if (!memberId.trim()) {
      setError('Please enter a valid member ID.');
      return;
    }

    const foundMember = memberDatabase.find((m) => m.id.toLowerCase() === memberId.toLowerCase());

    if (foundMember) {
      setMember(foundMember);
    } else {
      setError('Member ID not found. Please check the ID and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-[#1f1f1f] py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <Link
              to="/"
              className="flex items-center space-x-2 text-[#b0db9c] hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Verify Member</h1>
          <p className="text-xl text-gray-400">Enter a member ID to verify authenticity</p>
        </div>
      </div>

      {/* Verification Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleVerify} className="mb-12">
            <div className="bg-[#1f1f1f] p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-center">Member Verification</h2>

              <div className="relative">
                <input
                  type="text"
                  value={memberId}
                  onChange={(e) => setMemberId(e.target.value)}
                  placeholder="Enter Member ID (e.g., HF001)"
                  className="w-full bg-[#2e2e2e] border border-gray-600 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-400 focus:border-[#b0db9c] focus:ring-1 focus:ring-[#b0db9c] transition-all duration-300"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-[#b0db9c] text-black py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105"
              >
                Verify Member
              </button>
            </div>
          </form>

          {/* Error Message */}
          {error && (
            <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 mb-8 flex items-center space-x-3">
              <X className="w-5 h-5 text-red-500" />
              <span className="text-red-400">{error}</span>
            </div>
          )}

          {/* Member Details */}
          {member && (
            <div className="bg-[#1f1f1f] rounded-lg p-8 shadow-lg animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h3 className="text-2xl font-semibold text-green-400">Member Verified</h3>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-[#b0db9c]"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-3xl font-bold mb-2">{member.name}</h4>
                  <p className="text-[#b0db9c] text-xl mb-6">{member.position}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#2e2e2e] p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-[#b0db9c]" />
                        <div>
                          <p className="text-sm text-gray-400">Phone Number</p>
                          <p className="font-semibold">{member.phone}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#2e2e2e] p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-[#b0db9c]" />
                        <div>
                          <p className="text-sm text-gray-400">Blood Group</p>
                          <p className="font-semibold">{member.bloodGroup}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-green-900/20 border border-green-500 rounded-lg p-4">
                    <p className="text-green-400 font-semibold">✓ This is a verified HopeFoundation team member</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyMember;