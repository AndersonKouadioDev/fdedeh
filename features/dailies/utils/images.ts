import {addDomainToBackendImagePath} from "@/utils/image-utils";
import {IDaily} from "@/features/dailies/types";

export function getDailyImages(daily: IDaily) {
	return daily.contents?.map(content => addDomainToBackendImagePath(content.path_image)) || [];
}