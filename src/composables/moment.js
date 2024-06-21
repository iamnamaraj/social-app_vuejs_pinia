import moment from "moment";

export function formatDate(time) {
    return moment(time).fromNow()
}