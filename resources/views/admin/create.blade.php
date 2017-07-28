@extends('layout.master-inside-land')
@section('title', 'Matrix')
@section('content')

<div style="padding-top: 40px;" class="col-sm-6 col-sm-offset-3">
    <h3>Add a Question</h3>
    <form action="/admin/questions/" method="POST" id="CreateForm">
        <div class="form-group">
            <input type="text" name="question" value="" placeholder="Question" class="form-control" id="question" required="true">
        </div>
        <div class="form-group">
            <input type="text" name="option1" id="option1" value="" placeholder="OptionA" class="form-control" required="true">
        </div>
        <div class="form-group">
            <input type="text" name="option2" id="option2" value="" placeholder="OptionB" class="form-control" required="true">
        </div>
        <div class="form-group">
            <input type="text" name="option3" id="option3" value="" placeholder="OptionC" class="form-control" required="true">
        </div>
        <div class="form-group">
            <input type="text" name="option4" id="option4" value="" placeholder="OptionD" class="form-control" required="true">
        </div>

        <div class="form-group">
          <label for="answer">Answer:</label>
          <select class="form-control" name="answer" id="answer">
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>
        </div>        

        <div class="form-group">
          <label for="genre">Answer:</label>
          <select class="form-control" name="genre" id="genre">
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Maths</option>
          </select>
        </div>

        <input type="hidden" name="_token" value="{{ csrf_token() }}">
        <button type="submit" id="add-button" class="btn btn-fill" style="padding-top:10px">Add</button>
    </form>
</div>

@stop