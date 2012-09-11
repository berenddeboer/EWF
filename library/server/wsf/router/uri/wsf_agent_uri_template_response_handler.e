note
	description: "Summary description for {WSF_AGENT_URI_TEMPLATE_RESPONSE_HANDLER}."
	author: ""
	date: "$Date$"
	revision: "$Revision$"

class
	WSF_AGENT_URI_TEMPLATE_RESPONSE_HANDLER

inherit
	WSF_URI_TEMPLATE_RESPONSE_HANDLER

create
	make

feature -- Initialization

	make (act: like action)
		do
			action := act
		end

feature -- Access

	action: FUNCTION [ANY, TUPLE [ctx: WSF_URI_TEMPLATE_HANDLER_CONTEXT; req: WSF_REQUEST], WSF_RESPONSE_MESSAGE]

feature -- Execution

	response (ctx: WSF_URI_TEMPLATE_HANDLER_CONTEXT; req: WSF_REQUEST): WSF_RESPONSE_MESSAGE
		do
			Result := action.item ([ctx, req])
		end

note
	copyright: "2011-2012, Jocelyn Fiat, Javier Velilla, Eiffel Software and others"
	license: "Eiffel Forum License v2 (see http://www.eiffel.com/licensing/forum.txt)"
	source: "[
			Eiffel Software
			5949 Hollister Ave., Goleta, CA 93117 USA
			Telephone 805-685-1006, Fax 805-685-6869
			Website http://www.eiffel.com
			Customer support http://support.eiffel.com
		]"
end