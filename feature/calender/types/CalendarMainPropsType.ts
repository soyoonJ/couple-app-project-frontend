interface CalendarMainPropsType {
    changeDate?: (e: any) => void;
    selectedDay: Date | undefined;
    setSelectedDay?: React.Dispatch<React.SetStateAction<Date | undefined>>;
    onIsSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    coupleDay?: string;
}

export type { CalendarMainPropsType };
