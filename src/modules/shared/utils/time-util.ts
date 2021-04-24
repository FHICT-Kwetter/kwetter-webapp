import moment from "moment";

export const getAmountOfTimeSinceDate = (pastDate: Date) => {

    const now        = moment(new Date());
    const past       = moment(pastDate);
    const difference = moment.duration(now.diff(past));

    const secondsDifference = difference.asSeconds();
    const minutesDifference = difference.asMinutes();
    const hoursDifference   = difference.asHours();
    const daysDifference    = difference.asDays();
    const weeksDifference   = difference.asWeeks();
    const monthsDifference  = difference.asMonths();
    const yearsDifference   = difference.asYears();

    if (yearsDifference   > 2.0) { return `${ Math.floor(yearsDifference)   } years ago`;}
    if (yearsDifference   > 1.0) { return `${ Math.floor(yearsDifference)   } year ago`;}

    if (monthsDifference  > 2.0) { return `${ Math.floor(monthsDifference)  } months ago`; }
    if (monthsDifference  > 1.0) { return `${ Math.floor(monthsDifference)  } month ago`; }

    if (weeksDifference   > 2.0) { return `${ Math.floor(weeksDifference)   } weeks ago`; }
    if (weeksDifference   > 1.0) { return `${ Math.floor(weeksDifference)   } week ago`; }

    if (daysDifference    > 2.0) { return `${ Math.floor(daysDifference)    } days ago`; }
    if (daysDifference    > 1.0) { return `${ Math.floor(daysDifference)    } day ago`; }

    if (hoursDifference   > 2.0) { return `${ Math.floor(hoursDifference)   } hours ago`;}
    if (hoursDifference   > 1.0) { return `${ Math.floor(hoursDifference)   } hour ago`;}

    if (minutesDifference > 2.0) { return `${ Math.floor(minutesDifference) } minutes ago`; }
    if (minutesDifference > 1.0) { return `${ Math.floor(minutesDifference) } minute ago`; }

    if (secondsDifference > 2.0) { return `${ Math.floor(secondsDifference) } seconds ago`; }
    if (secondsDifference > 1.0) { return `${ Math.floor(secondsDifference) } second ago`; }

    return "Just now";
}
