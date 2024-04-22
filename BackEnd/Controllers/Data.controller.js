import CourseData from "../Models/Data.model.js";


export const getData = async (req, res) => {
    try {
        let data = await CourseData.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
