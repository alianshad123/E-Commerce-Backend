const Admin = require("../models/admin");
const jwt = require('jsonwebtoken');

const getAdmin = async (req, res) => {

    try {
    const { username, password } = req.query;
    console.log(username, password)
    // Check if admin exists
    const admin = await Admin.findOne({ username });
    console.log(admin)
    if (!admin) {
        return res.status(404).json({ success: false, message: 'Admin not found' });
    }

    // Check if password matches (plain-text comparison)
    if (password !== admin.password) {
        return res.status(400).json({ success: false,message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign(
        { id: admin._id, username: admin.username },
        'secretKey',  // Replace 'secretKey' with a secure key
        { expiresIn: '1h' }
    );

    // Return the token and success message
    res.json({ success: true,token, message: 'Login successful' });
}catch (error) {
    console.error(error);
    res.status(500).json({success: false, message: 'Internal server error' });
}
};

module.exports =  { getAdmin};