export default ({ app }, inject) => {
    inject('showToast', showToast)
}

function showToast(message, severity = "info") {
    this.$toast.add({
        severity,
        summary: "Message",
        detail: message,
        life: 3000,
    })
}