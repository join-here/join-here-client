import { lowResolution } from "@utils/image";
import { useCallback, useState } from "react";

export function useForm(initialValue, setFunction) {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(
    async (e) => {
      let newValue = e.target.value;

      if (setFunction) {
        newValue = setFunction(e);
      }

      if (e.target.type === "file") {
        if (!e.target.files || e.target.files.length === 0) return;
        newValue = await lowResolution(e.target.files[0]);
      }

      setValue((prev) => ({
        ...prev,
        [e.target.name]: newValue,
      }));
    },
    [setFunction]
  );
  return { value, setValue, onChange };
}
