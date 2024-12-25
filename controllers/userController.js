import SGPA from "../models/userModel.js"
export const Addsgpa = async (req, res) => 
  {
  const {name, email, sgpa } = req.body;
  const oldsgpa = await SGPA.findOne({ email });
  try 
  {
    if (!name || !email || !sgpa) 
    {
      return res.status(400).json({ error: "All fields are required!" });
    }
    if(oldsgpa)
    {
      oldsgpa.sgpaRecords.push({sgpa});
      await oldsgpa.save();
      return res.status(400).json({message: "SGPA added to existing user!",oldsgpa });
    }
    else 
    {
      const newSgpa = new SGPA({
        name,
        email,
        sgpaRecords: [{ sgpa }],
      }); 
      await newSgpa.save();
      return res.status(400).json({message: "SGPA added successfully!",newSgpa });
    }
  } catch (error) 
  {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Internal server error!" });
  }
};

export const Getsgpa = async (req, res) => {
  try {
    const SgpaData=await SGPA.find({});
    if (!SgpaData || SgpaData.length === 0) {
      return res.status(404).json({ message: "No data found!" });
    }
    return res.status(201).json({ message: "Data Fetched successfully!", SgpaData });
  } catch (error) {
    console.error("date fetching error:", error);
    return res.status(500).json({ error: "Internal server error!" });
  }
};
