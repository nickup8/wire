<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class StoreSupplierRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        // return [
        //     'supplier_code' => [
        //         'required',
        //         'string
        //         Rule::unique("suppliers", "supplier_code")->ignore($this->id)
        //     ],
        //     'supplier_name' => 'required|string',
        // ];

        return [
            'supplier_code' => [
                'required',
                'string',
                Rule::unique("suppliers", "supplierCode")->ignore($this->id)
            ],
            'supplier_name' => 'required|string'
        ];
    }
}
