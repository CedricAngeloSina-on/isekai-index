export function checkIfExist(
    value: any,
    prefix = "",
    suffix = "",
    defaultText: any = ""
) {
    return value !== undefined && value !== null
        ? prefix + value + suffix
        : defaultText;
}
