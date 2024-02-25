export default function GenderCheckbox() {
  return (
    <div className="flex p-2">
      <div className="form-control">
        <label className="cursor-pointer label gap-2">
          <span className="text-sm text-opacity-75 text-gray-300">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent border-emerald-700"
          />
        </label>
      </div>

      <div className="form-control">
        <label className="cursor-pointer label gap-2">
          <span className="text-sm text-opacity-75 text-gray-300">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent border-emerald-700"
          />
        </label>
      </div>

    </div>
  );
}
