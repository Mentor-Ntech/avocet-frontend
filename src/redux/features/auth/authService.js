import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
// const BACKEND_URL = 'http://localhost:5000';
export const API_URL = `${BACKEND_URL}/api/users/`;
export const GOOGLE_URL = `${BACKEND_URL}/`;

// Validate email
export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

// Register User
const contact = async (userData) => {
  const response = await axios.post(API_URL + "contact-form", userData);
  return response.data;
};

// Register User
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);
  return response.data;
};

// Register Controller
const registerController = async (userData) => {
    try {
      const url = `${API_URL}registerCollector`;
      const response = await axios.post(url, userData);
      return response.data;
    } catch (error) {
      console.error('Error registering controller:', error.message);
      throw error;
    }
  };
  
// Login User
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  return response.data;
};

// Logout User
const logout = async () => {
  const response = await axios.get(API_URL + "logout");
  return response.data.message;
};

// get login status
const getLoginStatus = async () => {
    try {
      const response = await axios.get(API_URL + "loginStatus");
      return response.data;
    } catch (error) {
      console.error('Error fetching login status:', error.message);
      throw error;
    }
  };
  

//   get user profile
  const getUser = async () => {
    try {
      const url = `${API_URL}getUser`;
      const response = await axios.get(url);
      
      return response.data;
    } catch (error) {
      console.error('Error fetching user profile:', error.message);
      throw error;
    }
  };


// Update profile
const updateUser = async (userData) => {
  const response = await axios.patch(API_URL + "updateUser", userData);
  return response.data;
};

// Send Verification Email
const sendVerificationEmail = async () => {
  const response = await axios.post(API_URL + "sendVerificationEmail");
  return response.data.message;
};

// Verify User
const verifyUser = async (verificationToken) => {
  const response = await axios.patch(
    `${API_URL}verifyUser/${verificationToken}`
  );

  return response.data.message;
};

// Change Password
const changePassword = async (userData) => {
  const response = await axios.patch(API_URL + "changePassword", userData);

  return response.data.message;
};

// Reset Password
const resetPassword = async (userData, resetToken) => {
  const response = await axios.patch(
    `${API_URL}resetPassword/${resetToken}`,
    userData
  );

  return response.data.message;
};

// fORGOT Password
const forgotPassword = async (userData) => {
  const response = await axios.post(API_URL + "forgotPassword", userData);

  return response.data.message;
};

// Get Users
const getUsers = async () => {
  const response = await axios.get(API_URL + "getUsers");

  return response.data;
};
// Delete User
const deleteUser = async (id) => {
  const response = await axios.delete(API_URL + id);

  return response.data.message;
};

// upgrade User
const upgradeUser = async (userData) => {
  const response = await axios.post(API_URL + "upgradeUser", userData);

  return response.data.message;
};
// upgrade User
const registerContact = async (userData) => {
  const response = await axios.post(API_URL + "contact", userData);

  return response.data.message;
};



// Send Login Code
const sendLoginCode = async (email) => {
  const response = await axios.post(API_URL + `sendLoginCode/${email}`);

  return response.data.message;
};
// Login With Code
const loginWithCode = async (code, email) => {
  const response = await axios.post(API_URL + `loginWithCode/${email}`, code);

  return response.data;
};
// Login With Googlr
const loginWithGoogle = async (userToken) => {
  const response = await axios.post(API_URL + "google/callback", userToken);

  return response.data;
};

const authService = {
  register,
  registerController,
  login,
  logout,
  getLoginStatus,
  getUser,
  updateUser,
  sendVerificationEmail,
  verifyUser,
  changePassword,
  forgotPassword,
  resetPassword,
  getUsers,
  deleteUser,
  upgradeUser,
  sendLoginCode,
  loginWithCode,
  loginWithGoogle,
  registerContact,
  contact
};

export default authService;