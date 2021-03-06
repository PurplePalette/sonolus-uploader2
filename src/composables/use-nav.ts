import {
    mdiAccount,
    mdiDiscord,
    mdiFileSearch,
    mdiFileUpload,
    mdiInformation,
} from '@mdi/js'

export default function () {
    return [
        { icon: mdiInformation, text: "SweetPotato.Navigation.Header.Introduction", to: "/introduction" },
        { icon: mdiDiscord, text: "SweetPotato.Navigation.Header.Community", to: "#" },
        { icon: mdiFileSearch, text: "SweetPotato.Navigation.Header.Explorer", to: "/explorer/levels" },
        { icon: mdiFileUpload, text: "SweetPotato.Navigation.Header.Upload", to: "/upload" },
        { icon: mdiAccount, text: "SweetPotato.Navigation.Header.MyPage", to: "/my-page" }
    ]
}