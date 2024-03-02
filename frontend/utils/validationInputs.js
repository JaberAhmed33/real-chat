import toast from "react-hot-toast";

const validationSignUpInputs = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("please fill all the fields.");
    return false;
  }

  if (fullName.length < 5 || fullName.length > 150) {
    toast.error("full name is must be more than 5 less than 150 characters.");
    return false;
  }

  if (username.length < 3 || username.length > 150) {
    toast.error("username is must be more than 3 less than 150 characters.");
    return false;
  }

  if (password.length < 7 || password.length > 70) {
    toast.error("password is must be more than 7 less than 150 characters.");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("password is not equals.");
    return false;
  }

  return true;
};

const validationLoginInputs = ({ username, password }) => {
  if (!username || !password) {
    toast.error("please fill all the fields.");
    return false;
  }

  if (username.length < 3 || username.length > 150) {
    toast.error("username is must be more than 3 less than 150 characters.");
    return false;
  }

  if (password.length < 7 || password.length > 70) {
    toast.error("password is must be more than 7 less than 150 characters.");
    return false;
  }

  return true;
};

const validationMessageInputs = ({ message, imgUrl }) => {

  if (!message && !imgUrl) {
    toast.error("please fill the message field or choses an image.");
    return false;
  }

  if (message.length > 150) {
    toast.error("message is must be less than 150 characters.");
    return false;
  }

  return true;
};

const validationSearchInputs = ({ search }) => {
  
  if (!search) {
    toast.error("please fill the search field.");
    return false;
  }

  if (search.length < 3) {
    toast.error("search is must be more than 3 characters.");
    return false;
  }

  return true;
};

export {
  validationSignUpInputs,
  validationLoginInputs,
  validationMessageInputs,
  validationSearchInputs
};
