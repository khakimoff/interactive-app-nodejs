(function() {
	var students = __students

	var form = document.getElementsByClassName('teacher-form')[0]

	var main = function() {
		var buttons = document.getElementsByClassName('attach-review')
		for (var i = 0; i < buttons.length; i++) {
			var button = buttons[i]
			button.addEventListener('click', function(event) {
				var studentL = event.currentTarget.dataset ?
					event.currentTarget.dataset.student :
					event.currentTarget.attributes['data-student']

				var student = students.find(function(s) {
					return s.login === studentL
				})

				if (!student || !student.assignment.complete)
					return false

				var html = [
					"<h3>Добавить задание</h3>",
					"<p>Ученик</p>",
					"<p>" + student.name + "</p>",
					'<p>Отзыв на <a href="' + student.assignment.task + '">задание</a></p>',
					'<input type="hidden" value=' + student.login + ' name="student"/>',
					'<input type="file" name="assignment" class="form-control-file" id="exampleFormControlFile1" />',
					'<button type="submit" class="btn btn-primary">Отправить</button>',
				]

				form.parentNode.action = '/teacher/review'
				form.innerHTML = html.join('')
			})
		}
	}


	if (document.readyState === "complete")
		main()
	else
		window.addEventListener('load', main)
})()
