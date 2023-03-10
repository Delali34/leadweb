import { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import { Options } from "flatpickr/dist/types/options";

import "flatpickr/dist/flatpickr.min.css";

interface DateTimePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

export default function DateTimePicker({
  value,
  onChange,
}: DateTimePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    const options: Options = {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      onChange: (selectedDates) => {
        if (onChange) {
          onChange(selectedDates[0]);
        }
      },
    };

    const flatpickrInstance = flatpickr(inputRef.current, options);

    if (value) {
      flatpickrInstance.setDate(value);
    }

    return () => {
      flatpickrInstance.destroy();
    };
  }, [value, onChange]);

  return <input type="text" ref={inputRef} />;
}
