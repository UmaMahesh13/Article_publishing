from django.shortcuts import render

# Create your views here.
def edit(request):
    return render(request,"post_edit.html")
# views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

def auto_save_post(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        content = request.POST.get('content')
        
        # Update the corresponding article record or data object with the new information
        # Save the changes to the database
        
        # Return a success response
        return JsonResponse({'message': 'Auto-save successful'})
    else:
        # Return an error response if the request method is not POST
        return JsonResponse({'message': 'Invalid request'}, status=400)
