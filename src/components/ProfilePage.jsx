
import SideMenu from "./SideMenu";
import profile from "../assets/download (1).png"

function ProfilePage() {
  return (
    <div className=" flex gap-4">
      <SideMenu />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          <div className="flex items-center mb-4">
            <img
              src={profile}
              alt="Profile"
              className="rounded-full h-20 w-20 object-cover mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-gray-600">Web Developer</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <p>Email: john.doe@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p>123 Main St, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
