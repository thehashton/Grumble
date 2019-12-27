let date: any = new Date(Date.now() + 86400e3);

export const getCookie = (name: any) => {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}

export const userLocationCookie = (userPostCode: any) => {
    date.setMonth( date.getMonth() + 1 );
    date = date.toUTCString();
    const userPostCodeCookie = document.cookie = `grumblePostCode="${userPostCode}"; samesite=strict; expires="${date}"; path=/`;
}

export const userPostCode = getCookie("grumblePostCode");

export default userLocationCookie;