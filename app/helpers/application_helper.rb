module ApplicationHelper
	def path
		request.original_fullpath
	end
end
