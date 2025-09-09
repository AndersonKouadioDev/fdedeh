"use client"

import * as React from "react"
import {format} from "date-fns"
import {Calendar as CalendarIcon} from "lucide-react"

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Calendar} from "@/components/ui/calendar"
import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"
import { fr } from "react-day-picker/locale";

export function DatePicker() {
	const [date, setDate] = React.useState<Date>()

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					data-empty={!date}
					className={cn("data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal")}
				>
					<CalendarIcon/>
					{date ? format(date, "PPP", {locale:fr}) : <span>Choisissez une date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-full p-0">
				<Calendar locale={fr} mode="single" selected={date} onSelect={setDate}/>
			</PopoverContent>
		</Popover>
	)
}