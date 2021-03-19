$(document).ready(function () {
    $('.submit_contact').click(function (event) {
        console.log('click button')

        let email = $('.email_contact').val()
        let subjet = $('.subject_contact').val()
        let message = $('.message_contact').val()
        let statut= $('.statut_contact')
        statut.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            
        } else {
            event.preventDefault()
            statut.append('<div>Email invalide</div>')
        }

        if(subjet.length >= 2) {
        } else {
            event.preventDefault()
            statut.append('<div>Sujet invalide</div>')
        }
    })
})