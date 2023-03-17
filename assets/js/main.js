$(function () {
  let dropdouwnIsOpen = false
  $('.dropdown').hover(function() {
    if (!dropdouwnIsOpen) {
      $('.dropdown-menu').fadeIn()
    } else {
      $('.dropdown-menu').hide()
    }
    dropdouwnIsOpen = !dropdouwnIsOpen
  })
  $('.dropdown1').hover(function() {
    if (!dropdouwnIsOpen) {
      $('.dropdown-menu1').fadeIn()
    } else {
      $('.dropdown-menu1').hide()
    }
    dropdouwnIsOpen = !dropdouwnIsOpen
  })
  $('.dropdown2').hover(function() {
    if (!dropdouwnIsOpen) {
      $('.dropdown-menu2').fadeIn()
    } else {
      $('.dropdown-menu2').hide()
    }
    dropdouwnIsOpen = !dropdouwnIsOpen
  })
  $('.dropdown3').hover(function() {
    if (!dropdouwnIsOpen) {
      $('.dropdown-menu3').fadeIn()
    } else {
      $('.dropdown-menu3').hide()
    }
    dropdouwnIsOpen = !dropdouwnIsOpen
  })
  $('.dropdown4').hover(function() {
    if (!dropdouwnIsOpen) {
      $('.dropdown-menu4').fadeIn()
    } else {
      $('.dropdown-menu4').hide()
    }
    dropdouwnIsOpen = !dropdouwnIsOpen
  })
})