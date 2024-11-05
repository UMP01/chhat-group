<?php
namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    // Store a new contact message
    public function store(Request $request)
{
    $validator = Validator::make($request->all(), [
        'fullname' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'subject' => 'required|string|max:255',
        'message' => 'required|string',
    ]);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }

    try {
        $contact = Contact::create($request->all());
        return response()->json(['message' => 'Contact message sent successfully!', 'data' => $contact], 201);
    } catch (\Exception $e) {
        return response()->json(['message' => 'Failed to store contact message.'], 500);
    }
}

    // Get a list of contacts
    public function index()
    {
        $contacts = Contact::all();
        return response()->json($contacts);
    }

    // Show a single contact by ID
    public function show($id)
    {
        $contact = Contact::find($id);

        if (!$contact) {
            return response()->json(['message' => 'Contact not found.'], 404);
        }

        return response()->json($contact);
    }

    // Delete a contact by ID
    public function destroy($id)
    {
        $contact = Contact::find($id);

        if (!$contact) {
            return response()->json(['message' => 'Contact not found.'], 404);
        }

        $contact->delete();

        return response()->json(['message' => 'Contact deleted successfully.']);
    }
}
