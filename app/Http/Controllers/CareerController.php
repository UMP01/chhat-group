<?php

namespace App\Http\Controllers;

use App\Models\Career;
use Illuminate\Http\Request;

class CareerController extends Controller
{

    public function index()
    {
        return Career::all();
    }
    public function store(Request $request)
    {
        try {
            $request->validate([
                'title' => 'required|string',
                'location' => 'required|string',
                'dateline' => 'required|date',
                'jobtype' => 'required|string',
                'salary' => 'required|string',
                'requirement' => 'nullable|string', // Make optional
                'responsible' => 'nullable|string', // Make optional
                'benefit' => 'nullable|string', // Make optional
            ]);

            $career = Career::create($request->only([
                'title', 'location', 'dateline', 'jobtype', 'salary', 'requirement', 'responsible', 'benefit'
            ]));

            return response()->json([
                'success' => true,
                'data'    => $career,
                'message' => 'Career created successfully'
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Server Error: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function update(Request $request, $id)
    {
        $career = Career::find($id);
        if (!$career) {
            return response()->json(['message' => 'Career not found'], 404);
        }

        // Validate incoming data
        $validatedData = $request->validate([
            'title' => 'required|string',
            'location' => 'required|string',
            'dateline' => 'required|date',
            'jobtype' => 'required|string',
            'salary' => 'required|string',
            'requirement' => 'nullable|string', // Make optional
            'responsible' => 'nullable|string', // Make optional
            'benefit' => 'nullable|string', // Make optional
        ]);

        $career->update($validatedData);
        return response()->json(['message' => 'Career updated successfully', 'career' => $career], 200);
    }


    public function show($id)
    {
        $career = Career::find($id);

        if (!$career) {
            return response()->json(['message' => 'Contact not found.'], 404);
        }

        return response()->json($career);
    }


    public function destroy($id)
    {
        $career = Career::find($id);
        if (!$career) {
            return response()->json(['message' => 'Career not found'], 404);
        }

        $career->delete();
        return response()->json(['message' => 'Career deleted successfully'], 200);
    }
}
