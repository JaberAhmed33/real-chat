export default function GenderCheckbox({ handleChange, selectedGender }) {
  return (
    <div className="flex p-2">
      <div className="form-control">
        <label className={`cursor-pointer label gap-2 ${selectedGender === "male" ? "selected" : ""}`}>
          <span className="text-sm text-opacity-75 text-gray-300">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent border-emerald-700"
            value="male"
            name="gender"
            checked = {selectedGender === "male"}
            onChange={(e) => handleChange(e)}
          />
        </label>
      </div>

      <div className="form-control">
      <label className={`cursor-pointer label gap-2 ${selectedGender === "female" ? "selected" : ""}`}>
          <span className="text-sm text-opacity-75 text-gray-300">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent border-emerald-700"
            value="female"
            name="gender"
            checked = {selectedGender === "female"}
            onChange={(e) => handleChange(e)}
          />
        </label>
      </div>
    </div>
  );
}
